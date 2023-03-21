import { View } from "reshaped/bundle";
import Contributor from "../Contributor";
import HeroSection from "../HeroSection";
import Playground from "../Playground";
import Roadmap from "../Roadmap";
import USP from "../USP";

const Homepage = () => {
  return (
    <View direction="column" gap={30}>
      <HeroSection />
      <View direction="column" gap={30} paddingTop={5}>
        <USP
          direction="row"
          title="Read"
          content="Fetch data by writing simple type-based orientated code, and GQty
        creates the GraphQL query on the fly."
        />
        <USP
          direction="row-reverse"
          title="Write"
          content="Create, Update, Delete? Call the function - that’s it..."
        />
        <USP
          direction="row"
          title="Performance optimized"
          content="Normalized cache built-In, which you can also use quite easily for state
        management!"
        />
      </View>
      <Playground />
      <Contributor />
      <Roadmap />
    </View>
  );
};

export default Homepage;
