import "./styles.css"

interface TableInfoProps {
  colName: string
  colWidth?: string
  limiter?: boolean
}

interface ItemTableProps {
  tableInfo: TableInfoProps[]
}

export const ItemTable: React.FC<React.PropsWithChildren<ItemTableProps>> = ({
  tableInfo,
  children,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-sm table-dark table-bordered text-center border-secondary align-middle">
        <colgroup>
          {tableInfo.map((col, index) => (
            <col key={index} width={col.colWidth ? col.colWidth : ""} />
          ))}
        </colgroup>

        <thead>
          <tr>
            {tableInfo.map((col, index) =>
              col.limiter ? (
                <th className="ship_table_limiter" key={index}>
                  {col.colName}
                </th>
              ) : (
                <th key={index}>{col.colName}</th>
              ),
            )}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
