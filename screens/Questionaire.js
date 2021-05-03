import React, { useState } from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Questionaire = ({handleAnswer,showAnswers,handleNextQuestion, data:{question, correct_answer, answers}}) => {
    const [bg,setBg] = useState()
    console.log(answers)
    return (
        <View>
            <View >
                <Text>{question}</Text>
            </View>
            <View >
                {answers.map((answer,i) => {
                    const specialClassName = showAnswers ? (
                        answer === correct_answer ? setBg('green'): setBg('red')
                    ) : "";
                    return(
                        <TouchableOpacity style={{marginTop:20}} 
                        onPress = {() => handleAnswer(answer)}>
                            <Text>{answers[i]}</Text>
                        </TouchableOpacity>

                    )
                })}
            </View>
            {showAnswers && (
                <Button onPress = {handleNextQuestion} title="Next Question" />
            )}
        </View>
    )
}

export default Questionaire

const styles = StyleSheet.create({})
