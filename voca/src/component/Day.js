import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

const Day = () => {
    const day = useParams().day; 
    const wordList = dummy.words.filter(word => word.day === Number(day));

    console.log(typeof(day));

    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <tr key = {word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day;