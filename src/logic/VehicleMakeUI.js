class VehicleMakeUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    editMake = "";
    editAbbreviation = "";
    editMode: false;
    };
  }
  useEffect(() => {
    setEditMake(make.name);
  }, [make.name]);

  useEffect(() => {
    setEditAbbreviation(make.abbreviation);
  }, [make.abbreviation]);

  componentDidMount() {
    document.title = `Younkdgh`;
  }

  componentDidMount() {
    document.title = `Younkdgh`;
  }

  render() {
    return <div></div>;
  }
}
