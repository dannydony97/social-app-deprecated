import React from "react"
import { Text } from "react-native-ui-lib";


const TextHelper = ({type, children}) => {

  const [color, setColor] = React.useState();

  React.useEffect(() => {

    switch(type) {
      case "error": setColor("red"); break;
      case "success": setColor("green"); break;
      default: console.error(`Type ${type} is not defined!`); break;
    }

  }, []);

  return (
    <Text color={color}>{children}</Text>
  );

};

export default TextHelper;