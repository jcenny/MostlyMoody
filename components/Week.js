import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as d3 from 'd3';
import { Svg, G, Rect, Line, Text } from 'react-native-svg';
import { Icon } from 'react-native-elements'

export default function Week(props) {
  const { week } = props;
  const graphMargin = 8;
  const barWidth = 8;
  const colors = {
    axis: '#000',
    bars: '#fff'
  }
  const SVGHeight = 225;
  const SVGWidth = 300;
  const graphHeight = SVGHeight - 2 * graphMargin;
  const graphWidth = SVGWidth - 2 * graphMargin;
  // X scale point
  const xDomain = week.map((item) => item.day);
  const xRange = [0, graphWidth];

  const x = d3.scalePoint()
    .domain(xDomain)
    .range(xRange)
    .padding(1)

  // Y scale point
  const yDomain = [0, d3.max(week, d => d.mood)]
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear()
    .domain(yDomain)
    .range(yRange)

  return (
    <View style={styles.container}>
      <View style={styles.moodContainer}>
        {week.map((item) => (
          <Button color="#fff" padding={20} title={` ${item.mood} `} />
        ))}
      </View>
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
          {week.map((item) => {
            return (
              <Rect
                key={item.day}
                x={x(item.day) - (barWidth / 2)}
                y={y(item.mood) * -1}
                rx={2}
                width={barWidth}
                height={y(item.mood)}
                fill={colors.bars}
              />
            )
          })}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.75"
          />
          {week.map((item) => (
            <Text
              key={'day' + item.day}
              x={x(item.day)}
              y="15"
              textAnchor="middle">{item.day}</Text>
          ))}
        </G>
      </Svg>
      <View style={styles.weatherContainer}>
        {week.map((item) => (
          <Icon color="#fff" name={item.weather} padding={6} type='material-community' />
        ))}
      </View>
      <View style={styles.degreeContainer}>
        {week.map((item) => (
          <Button color="#fff" title={`${item.degree}°`} />
        ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adb716',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
    paddingRight: 18
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: '#adb716',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 16
  },
  degreeContainer: {
    flex: 1,
    backgroundColor: '#adb716',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 225,
    paddingRight: 10
  },
  title: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 5,
    flex: 1,
  },
})