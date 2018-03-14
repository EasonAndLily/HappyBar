const HomeStyles = {
    container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  scrollView: {
    flexDirection: 'column',
  },
  containerStyle: {
    alignItems: 'center',
  },
  ListContainer: {
      flex: 1,
      marginTop: 25
  },
  movieItem: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: '#F5F5F5'
  },
  poster: {
    width: 53,
    height: 81,
    backgroundColor: 'gray'
  },
  movieDiscription: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  year: {
    fontSize: 12,
    marginBottom: 3,
    textAlign: 'center'
  },
  header: {
      height: 50,
      backgroundColor: '#F5F5F5'
  },
  headerText: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 44,
  },
  headerLine: {
      height: 1,
      backgroundColor: "#ccc",
  },
  separator: {
      height: 1,
      backgroundColor: "#ccc",
  }
};

export default HomeStyles;