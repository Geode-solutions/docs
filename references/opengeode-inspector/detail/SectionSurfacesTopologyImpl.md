# class SectionSurfacesTopologyImpl


 Class for inspecting the topology of a Section model surfaces through its unique vertices



## Functions

### SectionSurfacesTopologyImpl

```cpp
```cpp
public void SectionSurfacesTopologyImpl(const Section & section)
```
```


### SectionSurfacesTopologyImpl

```cpp
```cpp
public void SectionSurfacesTopologyImpl(const Section & section, _Bool verbose)
```
```


### section_vertex_surfaces_topology_is_valid

```cpp
```cpp
public _Bool section_vertex_surfaces_topology_is_valid(index_t unique_vertex_index)
```
```


 Checks if the section unique vertices are parts of valid surfaces, i.e. verify: If a unique vertex is part of two surfaces, it is part of a least one line which is boundary of the two blocks.

### vertex_is_part_of_invalid_surfaces_topology

```cpp
```cpp
public _Bool vertex_is_part_of_invalid_surfaces_topology(index_t unique_vertex_index)
```
```


### vertex_is_part_of_line_and_not_on_surface_border

```cpp
```cpp
public _Bool vertex_is_part_of_line_and_not_on_surface_border(index_t unique_vertex_index)
```
```



