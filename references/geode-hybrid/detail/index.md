# namespace detail



## Records

* [ExtractedElements](ExtractedElements.md)


## Functions

### compute_elements

```cpp
ExtractedElements compute_elements(BRep & brep, const ConstantMetric3D & metric)
```


### remesh_lines

```cpp
void remesh_lines(BRepRemeshingData & data, const struct ExtractedElements::Edges & edges)
```


### remesh_blocks

```cpp
void remesh_blocks(BRepRemeshingData & data, const struct ExtractedElements::Hexes & hexes)
```


### remesh_surfaces

```cpp
void remesh_surfaces(BRepRemeshingData & data, const struct ExtractedElements::Quads & quads)
```




