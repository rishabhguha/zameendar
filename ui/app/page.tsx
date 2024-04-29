import { Journey } from './components/Journey';
import { Properties } from './components/Properties';
import { Welcome } from './components/Welcome';
import { WhyUs } from './components/WhyUs';

export default function Home() {
  return (
    <main>
      <Welcome />
      <WhyUs />
      <Journey />
      <Properties />
    </main>
  );
}
