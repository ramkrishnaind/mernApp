import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

const WithLoading = Comp => ({ isLoading, children, ...props }) => {
  if (isLoading) {
    return (<LoadingOverlay
        active={true}
        spinner
        text='Loading your content...'
        classNamePrefix="tempzeindex"
        styles={{zIndex:99999}}
      ></LoadingOverlay>)
  } else {
    return (
      <Comp {...props}>
        {children}
      </Comp>
    )
  }
};

export default WithLoading;
// function WithLoading(Component) {
//     return function WihLoadingComponent({ isLoading, ...props }) {
//       if (!isLoading) return (<Component {...props} />);
//       return (  <LoadingOverlay
//         active={true}
//         spinner
//         text='Loading your content...'
//         classNamePrefix="tempzeindex"
//         styles={{zIndex:99999}}
//       ></LoadingOverlay>);
//     }
//   }
  
//   export default WithLoading;