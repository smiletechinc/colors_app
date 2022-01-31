import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Alert, Image, Text } from 'react-native';
import { IconButton, LogOutButton } from '../components/buttons';
import {styles} from './index';
import { connect, useDispatch } from 'react-redux';
import { ListItem } from '../components/grid/index';
import { userstatus } from '../redux/action/userAction';
import EmptyState from '../components/empty_states/colors_empty_state';

const PlusIcon = require("../resources/images/icon_plus.png");
const LogOutImage = require("../resources/images/logout_image.png");

type Props = {
  navigation: any;
  route: any;
  reduxColors: any;
  updated: boolean;
  add: any
}

let updatedOuter = false;

const HomeScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation, route, reduxColors, updated, add} = props;
  const [isFetching, setIsFetching] = useState(false);
  const [colors, setColors] = useState(reduxColors);
  const [updatingColors, setUpdatingColors] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState();

  const LogAlert = () => {  
    Alert.alert(
      'Alert  ',
      'Are you sure to Logout ',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: Logout},
      ],
      { cancelable: false }
    )
}  
  const Logout = () => {
    const userAuth: UserObject = {
      id: "",
      email: "",
      name: ""
    }
    add(userAuth);
    Alert.alert("You are logout");
  navigation.replace('LandingScreen');
  }
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <LogOutButton icon={LogOutImage} onPress={LogAlert}/>
      ),
    })
  }, [navigation]);

  useEffect(() => {
    setColors(reduxColors);
    updatedOuter = updated;
  }, [updated, reduxColors]);

  const SampleFunction=()=>{
    navigation.navigate('AddColorScreen', route.params );
}
 
const moveitem = (item) => {
   console.log("ColorID:", item.id);
   setSelectedID(item.id);
   console.log("selectedid is :",selectedID);
  navigation.navigate('AddColorScreen', {
   item : {
    id: item.id,
   name: item.name,
   code: item.code,
 },
 createdBy: route.params,
 options:{title:"Edit Color"},
 type:"EditColor",
});
}

const onRefresh = () => {
  setIsFetching(!isFetching)
};

const renderItem = ({item}) => {
  if(item.id===selectedID){
    return (
      <ListItem 
      color = {item}
      onPress = {() => moveitem(item)}
    />
    )
  }
  else {
    return(
      <ListItem 
           color = {item}
           onPress = {() => moveitem(item)}
         />
    )
  }
}
  return (
    <View style={styles.flatcontainer}>
{colors && colors.length > 0 ?      <View>
        {/* <FlatG colors={colors}/> */}
        <FlatList style = { styles.listContainer }
       data = { colors }
       keyExtractor={(item, index) => index.toString()}
       extraData={selectedID}
       numColumns={2}
       renderItem = {renderItem}
     />
        
      </View> :
      <EmptyState heading='No colors to show' 
      description='Please add colors to be previewd'
      buttonTitle='Add COlor'
      onPress={SampleFunction}/>}

<IconButton onPress={SampleFunction} icon={PlusIcon} />
    </View>
  );
}

  const mapStateToProps = state => {
  console.log("Redux props are comes:", JSON.stringify(state.colors.colors));
  return {
    reduxColors: state.colors.colors,
    updated: !updatedOuter,
  }
}

const mapDispatchToProps = dispatch => {
  console.log("Adding a value && Dispatch is Called");
  return {
    add: (usero) => {
      dispatch(userstatus(usero));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


