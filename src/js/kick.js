import nav from "./nav";
import cover from "./cover";
import feature from "./feature";
import main from "./main";
import footer from "./footer";


const kickApp = ({parent}) => {
  nav({ appendTo: parent });
  cover({ appendTo: parent });
  feature({ appendTo: parent });
  main({ appendTo: parent });
  footer({ appendTo: parent });
}

export default kickApp;