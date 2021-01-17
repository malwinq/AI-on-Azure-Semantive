import logging
import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        body = json.dumps(req.get_json())
    except ValueError:
        return func.HttpResponse(
             "Invalid body",
             status_code=400
        )
    
    if body:
        result = compose_response(body)
        return func.HttpResponse(result, mimetype="application/json")
    else:
        return func.HttpResponse(
             "Invalid body",
             status_code=400
        )


def compose_response(json_data):
    values = json.loads(json_data)['values']
    
    # Prepare the Output before the loop
    results = {}
    results["values"] = []
    
    for value in values:
        output_record = transform_value(value)
        if output_record != None:
            results["values"].append(output_record)
    return json.dumps(results, ensure_ascii=False)

## Perform an operation on a record
def transform_value(value):
    # Document categories
    image_ext = ['.jpeg', '.jpg', '.bmp', '.png']
    staticDoc_ext = ['.pdf']
    editDoc_ext = ['.doc', '.docx', '.odt']
    spredsheet_ext = ['.xls', '.xlsx']

    # File name types
    EU = 'eu'
    USA = 'us'

    try:
        recordId = value['recordId']
    except AssertionError  as error:
        return None

    # Validate the inputs
    try:         
        assert ('data' in value), "'data' field is required."
        data = value['data']        
        assert ('file_ext' in data), "'file_ext' field is required in 'data' object."
        assert ('file_name' in data), "'file_name' field is required in 'data' object."
    except AssertionError  as error:
        return (
            {
            "recordId": recordId,
            "errors": [ { "message": "Error:" + error.args[0] }   ]       
            })

    try:    
        file_ext = value['data']['file_ext'] 
        file_name = value['data']['file_name'] 

        # Simple file type categories           
        if file_ext in image_ext:
            file_type = "Image"
        elif file_ext in staticDoc_ext:
            file_type = "Complete Raport"
        elif file_ext in editDoc_ext:
            file_type = "Editable Raport"
        elif file_ext in spredsheet_ext:
            file_type = "Calculations"
        else:
            file_type = "Undefined"

        # File naming scheme tags for basic filtering of content
        if EU in file_name:
            name_type = "Europe"
        elif USA in file_name:
            name_type  = "USA"
        else:
            name_type = "Undefined"

    except:
        return (
            {
            "recordId": recordId,
            "errors": [ { "message": "Could not complete operation for record." }   ]       
            })
    return ({
            "recordId": recordId,
            "data": {
                "file_type": file_type,
                "name_type": name_type
                }
            })