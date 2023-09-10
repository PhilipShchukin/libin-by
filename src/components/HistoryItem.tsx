const HistoryItem: React.FC<{
    onClick: () => void
    data: {
        search: string
    }
}> = (props) => {
    return (
        <li className="history-item" onClick={props.onClick}>
            <div>
                Search: <span className="bold">{props.data.search}</span>
            </div>
        </li>
    )
}

export default HistoryItem
