import * as React from 'react';
import styles from './Countdown.module.scss';
import { ICountdownProps } from './ICountdownProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {ICountdownState} from './ICountdownState';
import  Timer from './Timer';

export default class Countdown extends React.Component<ICountdownProps, ICountdownState> {

  public render() {
    return ( <div >
      <Timer></Timer>
      </div>
    );
  }
}
