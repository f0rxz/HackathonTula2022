import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native'

// const button1 = styled.Text`
//   height: 10vh;
//   margin-bottom: 7vh;
//   font-style: normal;

//   font-size: calc(0.40*10vh);
//   line-height: 100%;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   color: #fdfdfd;
//   text-decoration:none;
//   justify-content: center;
//   letter-spacing: 10px;
// `;

// function MainPage(){
//   return(
//     <>
//     <section class="page1" id="page1">
//         <img src="./img/mush_logo.png" class="img-logo-pg1"></img>
// 		<div class="buttons">
//             <a href="./color.html" class="button-1">
//                 <Button1>найти гриб</Button1>
//             </a>
// 		    <a href="./help.html" class="button-1">
//                 <Button1>помощь</Button1>
//             </a>
//         </div>
//     </section>
//     </>
//   )
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

