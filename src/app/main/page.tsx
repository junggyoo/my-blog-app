import FeaturedSection from './components/FeaturedSection';
import IntroduceSection from './components/IntroduceSectoin';
import YouMayLikeSection from './components/YouMayLikeSection';

export default function MainPage() {
  return (
    <main>
      <IntroduceSection />
      <FeaturedSection />
      <YouMayLikeSection />
    </main>
  );
}
