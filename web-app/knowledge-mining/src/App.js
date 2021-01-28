import DocumentSearch from './DocumentSearch';
import Header from './Header';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div style={{textAlign: 'center'}}>
          <Header/>
          <DocumentSearch/>
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
