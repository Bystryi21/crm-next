import { headers } from 'next/headers';
import ActiveLabel, { Status } from './components/status-label';
import StatusLabel from './components/status-label';
import AddCompanyButton from './components/add-company-button';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent />
    </main>
  );
}
