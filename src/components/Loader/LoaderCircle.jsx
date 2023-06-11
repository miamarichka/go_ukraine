import { Circles } from "react-loader-spinner";

export const LoaderCircle = () => {
    return (
      <Circles
        height='300'
        width='200'
        color='#025ABB'
        ariaLabel='circles-loading'
        wrapperStyle={{ backgroundColor: "transparent" }}
        wrapperClass=''
        visible={true}
      />
    );
}