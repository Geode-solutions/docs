# class BackgroundBRepBuilder


```cpp
```cpp
Inherits from BRepBuilder
```
```



## Functions

### BackgroundBRepBuilder

```cpp
```cpp
public void BackgroundBRepBuilder(BackgroundBRep & background_brep)
```
```


### ~BackgroundBRepBuilder

```cpp
```cpp
public void ~BackgroundBRepBuilder()
```
```


### background_solid_builder

```cpp
```cpp
public std::unique_ptr<BackgroundSolidBuilder> background_solid_builder(const uuid & block_id)
```
```


### copy

```cpp
```cpp
public void copy(const BackgroundBRep & source)
```
```


### convert_blocks_to_background_solid

```cpp
```cpp
public void convert_blocks_to_background_solid()
```
```


### convert_blocks_to_tetrahedral_solid

```cpp
```cpp
public void convert_blocks_to_tetrahedral_solid()
```
```


### add_macro_vertex_info

```cpp
```cpp
public void add_macro_vertex_info(const uuid & component_uuid, index_t macro_vertex_id, index_t unique_vertex_id)
```
```


### update_vertices

```cpp
```cpp
public void update_vertices(const BRepCollapsePolygonEdgeInfo & info)
```
```




