import ScheduleItem from './ScheduleItem';
import { TCurrentSchedules } from '../../types';

interface Props {
  currentSchedules?: TCurrentSchedules;
}

function ScheduleEditor({ currentSchedules }: Props) {
  console.log(currentSchedules);

  return (
    <fieldset
      className={
        'w-full h-fit p-[1rem] border-[2px] border-black overflow-x-hidden'
      }>
      <legend>Schedule</legend>
      <ScheduleItem
        day={'monday'}
        currentSchedule={currentSchedules?.monday ?? undefined}
      />
      <ScheduleItem
        day={'tuesday'}
        currentSchedule={currentSchedules?.tuesday ?? undefined}
      />
      <ScheduleItem
        day={'wednesday'}
        currentSchedule={currentSchedules?.wednesday ?? undefined}
      />
      <ScheduleItem
        day={'thirsday'}
        currentSchedule={currentSchedules?.thirsday ?? undefined}
      />
      <ScheduleItem
        day={'friday'}
        currentSchedule={currentSchedules?.friday ?? undefined}
      />
      <ScheduleItem
        day={'saturday'}
        currentSchedule={currentSchedules?.saturday ?? undefined}
      />
      <ScheduleItem
        day={'sunday'}
        currentSchedule={currentSchedules?.sunday ?? undefined}
      />
    </fieldset>
  );
}

export default ScheduleEditor;
