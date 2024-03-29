import React, { Component} from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

var latestUser = require('../api.js').latestSession;

export default class ProfilePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: 'lololo',
      lastName:'',
      firstName:'',
      data:[]
    }
  }

  static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
};

  fetchData= async()=>{


    const response = await fetch('http://130.229.191.224:8989/user');
    const users = await response.json();
    this.setState({data: users});
    this.setState({firstName: users[0].first_name});
    this.setState({lastName: users[0].last_name});


  }

  componentDidMount() {

  //   //const { userName } = this.state
  // //Working
  //   latestUser()
  //     .then(res => {
  //       console.log(res)
  //       //this.setState({userName:res.userName})
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       console.log('Check auth failed error')
  //       this.setState({userName:'Henrik Blomgren'})
  //     })
      // Use when at school
      //this.fetchData();
  }


  render() {
    return (
      <View style={styles.container}>

              <StatusBar animated={false} barStyle="dark-content" hidden={false} />


              <View style={styles.rect2}>
                <View style={styles.icon9Stack}>
                  <MaterialCommunityIconsIcon
                    name="account-circle"
                    style={styles.icon9}
                  />
                  <Text style={styles.text}>Profil</Text>
                  <Text style={styles.text2}>Henrik Blomgren</Text>
                </View>
              </View>


                <ScrollView style={styles.container}>
            <View style={styles.buttonStack}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text3}>Personligt</Text>
                </TouchableOpacity>

                <MaterialCommunityIconsIcon
                  name="arrow-right"
                  style={styles.icon10}
                />
            </View>

            <View style={styles.rect4Stack}>
              <TouchableOpacity style={styles.rect4}>
                <Text style={styles.text4}>Betalningar</Text>
              </TouchableOpacity>
              <MaterialCommunityIconsIcon
                name="arrow-right"
                style={styles.icon11}
              />
            </View>


        <View style={styles.rect5Stack}>
          <TouchableOpacity style={styles.rect5}>
            <Text style={styles.text5}>Parkeringshistorik</Text>
          </TouchableOpacity>
          <MaterialCommunityIconsIcon
            name="arrow-right"
            style={styles.icon12}
          />
        </View>


        <View style={styles.rect6Stack}>
          <TouchableOpacity style={styles.rect6}>
            <Text style={styles.text11}>FAQ</Text>
          </TouchableOpacity>
          <MaterialCommunityIconsIcon
            name="arrow-right"
            style={styles.icon13}
          />
        </View>


        <View style={styles.rect7Stack}>
          <TouchableOpacity style={styles.rect7}>
            <Text style={styles.text12}>Bjud in en vän</Text>
          </TouchableOpacity>
          <MaterialCommunityIconsIcon
            name="arrow-right"
            style={styles.icon16}
          />
        </View>


      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"//"rgba(230, 230, 230,1)"
  },
  rect2: {
    width: 375,
    height: 282,
    backgroundColor: "rgba(242,178,0,1)",
    opacity: 1,
    marginLeft: -1
  },
  icon9: {
    top: 36,
    left: 89,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 135,
    height: 135,
    width: 135
  },
  text: {
    top: 0,
    left: 107,
    color: "#121212",
    position: "absolute",
    fontSize: 36,
    fontFamily: "montserrat-font", //"atm-font",
    letterSpacing: 0
  },
  text2: {
    top: 170,
    color: "#121212",
    position: "absolute",
    fontSize: 34,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginLeft: 5,
    textAlign: "center",
    left: 0
  },
  icon9Stack: {
    width: 313,
    height: 206,
    marginTop: 47,
    marginLeft: 32
  },
  button: {
    top: 0,
    left: 0,
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1
  },
  text3: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 15,
    marginLeft: 21
  },
  icon10: {
    top: 5,
    left: 275,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48
  },
  buttonStack: {
    width: 330,
    height: 53,
    marginTop: 16,
    marginLeft: 21
  },
  rect4: {
    top: 0,
    left: 0,
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1
  },
  text4: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 15,
    marginLeft: 22
  },
  icon11: {
    top: 3,
    left: 276,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48
  },
  rect4Stack: {
    width: 331,
    height: 52,
    marginTop: 11,
    marginLeft: 23
  },
  rect5: {
    top: 0,
    left: 0,
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1
  },
  text5: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 14,
    marginLeft: 26
  },
  icon12: {
    top: 4,
    left: 276,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48
  },
  rect5Stack: {
    width: 331,
    height: 52,
    marginTop: 14,
    marginLeft: 23
  },
  rect6: {
    top: 0,
    left: 0,
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1
  },
  text11: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 14,
    marginLeft: 24
  },
  icon13: {
    top: 4,
    left: 278,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48
  },
  rect6Stack: {
    width: 333,
    height: 52,
    marginTop: 17,
    marginLeft: 21
  },
  rect7: {
    top: 0,
    left: 0,
    width: 330,
    height: 52,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.7,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 1
  },
  text12: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "montserrat-font",
    letterSpacing: 0,
    marginTop: 15,
    marginLeft: 27
  },
  icon16: {
    top: 2,
    left: 278,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 48
  },
  rect7Stack: {
    width: 333,
    height: 52,
    marginTop: 10,
    marginLeft: 21
  },
  icon17: {
    color: "rgba(0,0,0,1)",
    fontSize: 48,
    marginTop: 15,
    marginLeft: 295
  },
  navBarProfile: {
    width: 375,
    height: 112,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 1,
    marginTop: 26
  },
  icon15: {
    color: "rgba(66,245,170,1)",
    fontSize: 300,
    opacity: 0.7,
    marginTop: 22,
    marginLeft: 269
  }
});
