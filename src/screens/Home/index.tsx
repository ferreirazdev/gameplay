import React, { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';

import { styles } from './styles';

export function Home(){
  const [category, setCategory ] = useState('')

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos ao challenger sem perder partida na md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20h40',
      description: 'É hoje que vamos ao challenger sem perder partida na md10'
    }
  ]

  function handleCategorySelecct(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View >  
      
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelecct}
      />
      
      <View style={styles.content}>
          <ListHeader
            title="Partidas Agendadas"
            subtitle="Total 6"
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item}
                onPress={handleAppointmentDetails}
              />
            )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
          />
        </View>
        
    </Background>
  );
};

