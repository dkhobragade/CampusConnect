import { AppShell, rem } from '@mantine/core'
import './App.css'
import Header from './components/Header'
import SignUp from './pages/SignUp'

function App ()
{

  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main w='100%' h="100%" mih="100%" pt={ `calc(${ rem( 20 ) } + var(--mantine-spacing-md))` }>
        <SignUp />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
