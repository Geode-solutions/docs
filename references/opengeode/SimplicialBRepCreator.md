# class SimplicialBRepCreator


## Functions

### SimplicialBRepCreator

```cpp
public void SimplicialBRepCreator(BRep & brep, vector unique_points)
```

### ~SimplicialBRepCreator

```cpp
public void ~SimplicialBRepCreator()
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


### create_blocks

```cpp
public vector create_blocks(Span surfaces, Span definitions)
```


### create_blocks

```cpp
public vector create_blocks(Span corners, Span lines, Span surfaces, Span definitions)
```


### create_model_boundaries

```cpp
public vector create_model_boundaries(Span surfaces, absl::Span<const BoundaryDefinition> definitions)
```


### SimplicialBRepCreator

```cpp
public void SimplicialBRepCreator(BRep & brep, int unique_points)
```




