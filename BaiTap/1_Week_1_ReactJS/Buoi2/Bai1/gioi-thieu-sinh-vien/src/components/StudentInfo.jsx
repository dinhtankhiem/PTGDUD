function StudentInfo(props) {
    const hoTen = props.hoTen;
    const mssv = props.mssv;
    const lop = props.lop;

    return(
        <section className="student">
            <h2 className="tieuDe">Thông tin sinh viên</h2>

            <div className="sd-row">
                <span className="sd-label">Họ tên: </span>
                <span className="sd_value">{hoTen}</span>
            </div>

            <div className="sd-row">
                <span className="sd-label">MSSV: </span>
                <span className="sd_value">{mssv}</span>
            </div>

            <div className="sd-row">
                <span className="sd-label">Lớp: </span>
                <span className="sd_value">{lop}</span>
            </div>
        </section>
    );
}

export default StudentInfo;