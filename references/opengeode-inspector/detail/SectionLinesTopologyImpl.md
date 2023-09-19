# class SectionLinesTopologyImpl


 Class for inspecting the topology of a Section model lines through their unique vertices



## Functions

### SectionLinesTopologyImpl

```cpp
```cpp
public void SectionLinesTopologyImpl(const Section & section)
```
```


### SectionLinesTopologyImpl

```cpp
```cpp
public void SectionLinesTopologyImpl(const Section & section, _Bool verbose)
```
```


### section_vertex_lines_topology_is_valid

```cpp
```cpp
public _Bool section_vertex_lines_topology_is_valid(index_t unique_vertex_index)
```
```


 Checks if the section unique vertices are parts of valid lines, i.e. verify: Each line is either internal or boundary. Each internal line is internal to only one object and is not boundary. If the vertex is part of only one line, the vertex is part of no more than 2 surfaces, and the line is either internal to a surface (and the vertex is in one and only one surface) or a boundary of all the surfaces the vertex is in. If the vertex is part of multiple lines, it is also a corner.

### vertex_is_part_of_not_boundary_nor_internal_line

```cpp
```cpp
public _Bool vertex_is_part_of_not_boundary_nor_internal_line(const index_t unique_vertex_index)
```
```


### vertex_is_part_of_line_with_invalid_internal_topology

```cpp
```cpp
public _Bool vertex_is_part_of_line_with_invalid_internal_topology(const index_t unique_vertex_index)
```
```


### vertex_is_part_of_invalid_unique_line

```cpp
```cpp
public _Bool vertex_is_part_of_invalid_unique_line(index_t unique_vertex_index)
```
```


### vertex_has_lines_but_is_not_corner

```cpp
```cpp
public _Bool vertex_has_lines_but_is_not_corner(index_t unique_vertex_index)
```
```




