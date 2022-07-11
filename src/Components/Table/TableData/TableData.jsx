import './TableData.scss';
import { useMediaQuery } from 'react-responsive';

export default function TableData({data}) {

    const isMobile = useMediaQuery({
        query: '(max-width: 750px)',
      });

    return (
            data.map((block, ind) => (
                <tr key={ind}>
                    <td>{block.blockNumber}</td>
                    <td style={isMobile ? {maxWidth: '85px'} : {maxWidth: '140px'}}><a target="_blank" rel="noreferrer" href={`https://etherscan.io/tx/${block.transactionId}`}>{block.transactionId}</a></td>
                    <td style={isMobile ? {maxWidth: '85px'} : {maxWidth: '130px'}}>{block.senderAddress}</td>
                    <td style={isMobile ? {maxWidth: '100px'} : {maxWidth: '155px'}}>{block.recipientsAddress}</td>
                    <td style={isMobile ? {maxWidth: '100px'} : {maxWidth: '135px'}}>{block.blockConfirmations}</td>
                    <td style={isMobile ? {maxWidth: '85px'} : {maxWidth: '130px'}}>{block.date}</td>
                    <td style={isMobile ? {maxWidth: '85px'} : {maxWidth: '240px'}}>{block.value}</td>
                    <td style={isMobile ? {maxWidth: '85px'} : {maxWidth: '130px'}}>{block.transactionFee}</td>
                </tr>
            )
        )
    )
}