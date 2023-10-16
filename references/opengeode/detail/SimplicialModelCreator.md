# class SimplicialModelCreator


## Functions

### SimplicialModelCreator

```cpp
public void SimplicialModelCreator<Model>(Model & model, std::vector<Point<dimension> > unique_points)
```


### create_corners

```cpp
public vector create_corners(Span definitions)
```


### create_lines

```cpp
public vector create_lines(Span corners, Span definitions)
```


### create_surfaces

```cpp
public vector create_surfaces(Span lines, Span definitions)
```


### create_surfaces

```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
```


### create_point

```cpp
protected void create_point(MeshBuilder & mesh_builder, const Component & component, index_t vertex)
```


### model

```cpp
protected const Model & model()
```


### builder

```cpp
protected ModelBuilder & builder()
```




