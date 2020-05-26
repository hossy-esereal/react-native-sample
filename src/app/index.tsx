import {CalendarList} from 'react-native-calendars';
import {View, Text} from 'react-native';
import React from 'react';
import {LocaleConfig} from 'react-native-calendars';
import {calendarConfig} from './calendar/createConfig';

// カレンダーの詳細設定
LocaleConfig.locales['ja'] = calendarConfig();
LocaleConfig.defaultLocale = 'ja';

export default (): React.ReactNode => {
  return (
    <View style={{marginTop: 100}}>
      <CalendarList
        horizontal
        pagingEnabled
        calendarHeight={900}
        theme={{textMonthFontSize: 20}}
        dayComponent={({date, state}) => {
          console.log(state);
          return (
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'gray' : 'black',
                  fontSize: 20,
                  padding: 15,
                }}>
                {date.day}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
