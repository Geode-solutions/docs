# class SimplicialSectionCreator


## Functions

### SimplicialSectionCreator

```cpp
public void SimplicialSectionCreator(Section & brep, vector unique_points)
```


### ~SimplicialSectionCreator

```cpp
public void ~SimplicialSectionCreator()
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


### create_model_boundaries

```cpp
public vector create_model_boundaries(Span lines, Span definitions)
```




