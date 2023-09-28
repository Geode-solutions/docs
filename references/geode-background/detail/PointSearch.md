# class PointSearch

# class PointSearch

# class PointSearch

```cpp
Defined at ../include/geode/background/common/private/point_search.h#31
```

## Records

Impl



## Functions

### ~PointSearch

```cpp
public void ~PointSearch<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/background/common/point_search.cpp#70
```

### vertex_search

```cpp
public const NNSearch<dimension> & vertex_search()
```

```cpp
Defined at /github/workspace/src/geode/background/common/point_search.cpp#75
```

### element_search

```cpp
public const NNSearch<dimension> & element_search()
```

```cpp
Defined at /github/workspace/src/geode/background/common/point_search.cpp#82
```

### mesh_points

```cpp
public int mesh_points(const Mesh & mesh)
```

```cpp
Defined at ../include/geode/background/common/private/point_search.h#43
```

### mesh_element_barycenters

```cpp
public int mesh_element_barycenters(const Mesh & mesh)
```

```cpp
Defined at ../include/geode/background/common/private/point_search.h#56
```

### build_vertex_tree

```cpp
public void build_vertex_tree(int points, PointSearchKey )
```

```cpp
Defined at /github/workspace/src/geode/background/common/point_search.cpp#89
```

### PointSearch

```cpp
protected void PointSearch<dimension>(int points, int element_barycenters)
```

```cpp
Defined at /github/workspace/src/geode/background/common/point_search.cpp#55
```

### PointSearch

```cpp
protected void PointSearch<dimension>(PointSearch<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/background/common/point_search.cpp#63
```

### mesh_points

```cpp
public std::vector<Point<Mesh::dim> > mesh_points(const Mesh & mesh)
```

```cpp
Defined at ../include/geode/background/common/private/point_search.h#43
```

### mesh_element_barycenters

```cpp
public std::vector<Point<Mesh::dim> > mesh_element_barycenters(const Mesh & mesh)
```

```cpp
Defined at ../include/geode/background/common/private/point_search.h#56
```

### build_vertex_tree

```cpp
public void build_vertex_tree(std::vector<Point<dimension> > points, PointSearchKey )
```

### PointSearch

```cpp
protected void PointSearch<dimension>(std::vector<Point<dimension> > points, std::vector<Point<dimension> > element_barycenters)
```



