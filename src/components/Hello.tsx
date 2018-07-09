
import * as React from 'react';

// import LS2ResearcherAPIClient from '../api/LS2ResearcherAPIClient';

import { Button, Intent, Spinner } from "@blueprintjs/core";

export interface IHelloProps {
  // name: string;
  // enthusiasmLevel?: number;
  apiToken?: string | null;
  setAPIToken?: (token: string) => void;
  clearAPIToken?: () => void;
}

// export interface IHelloDispatchProps {
//   setAPIToken: ((token: string) => void) | null;
// }

// function Hello({ name, enthusiasmLevel = 1 }: Props) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }

class Hello extends React.Component<IHelloProps, {}> {

  // public componentDidMount() {
  //   const baseURL = "http://localhost:8000";
  //   const studyID = "15dfe694-1aef-4cf7-aafd-be27b26dbbb4";
  //   const username = "";
  //   const password = "";
  //   LS2ResearcherAPIClient.signIn(baseURL, studyID, username, password).then((token) => {

  //     // this.props.setAPIToken?(token);

  //     if (this.props.setAPIToken) {
  //       this.props.setAPIToken(token);
  //     }

  //   });
  // }

  public render() {
    // const { name, enthusiasmLevel = 1 } = this.props;

    const name = "James"
    const enthusiasmLevel = 3;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <Spinner intent={Intent.PRIMARY} />
        <Button intent={Intent.SUCCESS} >button content</Button>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
          <p>{ this.props.apiToken } </p>
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
