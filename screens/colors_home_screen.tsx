import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { IconButton } from '../components/buttons';
import {styles} from './index';
import { connect, useDispatch } from 'react-redux';
import ListItem from '../components/grid/list_item';

const PlusIcon = require("../resources/images/icon_plus.png");

type Props = {
  navigation: any;
  route: any;
  reduxColors: any;
  updated: boolean;
}

let updatedOuter = false;

const HomeScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation, route, reduxColors, updated} = props;
  
  const [isFetching, setIsFetching] = useState(false);
  const [colors, setColors] = useState(reduxColors);
  const [updatingColors, setUpdatingColors] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState();

  useEffect(() => {
    setColors(reduxColors);
    updatedOuter = updated;
  }, [updated, reduxColors]);
  const SampleFunction=()=>{
    navigation.navigate('AddColorScreen');
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
      <View>
        {/* <FlatG colors={colors}/> */}
        <FlatList style = { styles.listContainer }
       data = { colors }
       keyExtractor={(item, index) => index.toString()}
       extraData={selectedID}
       numColumns={2}
       renderItem = {renderItem}
     />
        <IconButton onPress={SampleFunction} icon={PlusIcon} />
      </View>
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

export default connect(mapStateToProps)(HomeScreen);

