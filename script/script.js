function tags() {
    <div>
        <h2>Tags</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Name </th>
                    <th>Confiança =</th>
                </tr>
            </thead>
            <tbody>
                {analysis.tags.map(function (item, index) {
                    if (item.confidence > 0.1)
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td><ProgressBar now={item.confidence}
                                    label={`${item.confidence.toFixed(2)}%`} variant="success"
                                    min="0" max="1" /></td>
                            </tr>
                        );
                })}
            </tbody>
        </table>
    </div>
}

function categorias() {
    <div>
        <h2 className="display-2">Visão

            Computacional</h2>

        <div><img src={analysis.URL} height="200" border="1"

            alt="Imagem" /></div>
        <h3>Categorias</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Categoria </th>
                    <th>Confiança </th>
                </tr>
            </thead>
            <tbody>
                {analysis.categories.map(function (item, index) {
                    if (item.score > 0.1)
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td><ProgressBar now={item.score}
                                    label={`${item.score.toFixed(2)}%`} variant="success"
                                    min="0" max="1" /></td>
                            </tr>
                        );
                })}
            </tbody>
        </table>
    </div>
}