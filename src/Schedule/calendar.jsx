import React from 'react';
import {ViewState,   IntegratedEditing} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  MonthView,
  DayView,
  TodayButton,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  Resources,
  AppointmentTooltip,
  Appointments,
  AppointmentForm
} from "@devexpress/dx-react-scheduler-material-ui";

import { withStyles } from "@material-ui/core/styles";

import {Paper, Button, Checkbox, FormControlLabel} from "@material-ui/core"

import {appointments} from "../Data/data"

const handleButtonClick = (locationName, locations) => {
  if (locations.indexOf(locationName) > -1) {
    return locations.filter(location => location !== locationName);
  }
  const nextLocations = [...locations];
  nextLocations.push(locationName);
  return nextLocations;
};

const LocationSelector = () => (
  <FormControlLabel
      control={
        <Button onClick={handleButtonClick} color="primary" >sd</Button>
      }
      label="Doctor"
    />
)

export const Calendar = () => {
  return(
    <Paper>
      <Scheduler locale="es-PE" data={appointments}>
          <ViewState/>
          <WeekView startDayHour={8} endDayHour={22} displayName="Semana"/>
          <DayView displayName="Dia"/>
          <MonthView displayName="Mes"/>
          <Appointments
          
          />
          <Toolbar flexibleSpaceComponent={LocationSelector}/>
          <DateNavigator/>
          <ViewSwitcher />
          <AppointmentTooltip
            showOpenButton
            showCloseButton
          />
          <AppointmentForm/>
          <TodayButton/>
      </Scheduler>
    </Paper>
  )
}