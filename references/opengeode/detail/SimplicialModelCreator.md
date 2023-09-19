# class SimplicialModelCreator


## Functions

### SimplicialModelCreator

```cpp
```cpp
public void SimplicialModelCreator<Model>(Model & model, std::vector<Point<dimension> > unique_points)
```
```


### create_corners

```cpp
```cpp
public vector create_corners(Span definitions)
```
```


### create_lines

```cpp
```cpp
public vector create_lines(Span corners, Span definitions)
```
```


### create_surfaces

```cpp
```cpp
public vector create_surfaces(Span lines, Span definitions)
```
```


### create_surfaces

```cpp
```cpp
public vector create_surfaces(Span corners, Span lines, Span definitions)
```
```


### create_point

```cpp
```cpp
protected void create_point(MeshBuilder & mesh_builder, const Component & component, index_t vertex)
```
```


### model

```cpp
```cpp
protected const Model & model()
```
```


### builder

```cpp
```cpp
protected ModelBuilder & builder()
```
```




