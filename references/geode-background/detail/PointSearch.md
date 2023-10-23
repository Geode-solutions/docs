<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class PointSearch

# class PointSearch

# class PointSearch


## Records

Impl



## Functions

### ~PointSearch

```cpp
public void ~PointSearch<dimension>()
```


### vertex_search

```cpp
public const NNSearch<dimension> & vertex_search()
```


### element_search

```cpp
public const NNSearch<dimension> & element_search()
```


### mesh_points

```cpp
public int mesh_points(const Mesh & mesh)
```


### mesh_element_barycenters

```cpp
public int mesh_element_barycenters(const Mesh & mesh)
```


### build_vertex_tree

```cpp
public void build_vertex_tree(int points, PointSearchKey )
```


### PointSearch

```cpp
protected void PointSearch<dimension>(int points, int element_barycenters)
```


### PointSearch

```cpp
protected void PointSearch<dimension>(PointSearch<dimension> && other)
```


### mesh_points

```cpp
public std::vector<Point<Mesh::dim> > mesh_points(const Mesh & mesh)
```


### mesh_element_barycenters

```cpp
public std::vector<Point<Mesh::dim> > mesh_element_barycenters(const Mesh & mesh)
```


### build_vertex_tree

```cpp
public void build_vertex_tree(std::vector<Point<dimension> > points, PointSearchKey )
```

### PointSearch

```cpp
protected void PointSearch<dimension>(std::vector<Point<dimension> > points, std::vector<Point<dimension> > element_barycenters)
```



