# struct PolyhedronFacetEdge


## Members

```cpp
public PolyhedronFacet polyhedron_facet
```

```cpp
public local_index_t edge_id
```



## Functions

### PolyhedronFacetEdge

```cpp
public void PolyhedronFacetEdge()
```


### PolyhedronFacetEdge

```cpp
public void PolyhedronFacetEdge(PolyhedronFacet facet, local_index_t edge_id_in)
```


### operator==

```cpp
public _Bool operator==(const PolyhedronFacetEdge & other)
```


### operator!=

```cpp
public _Bool operator!=(const PolyhedronFacetEdge & other)
```


### operator<

```cpp
public _Bool operator<(const PolyhedronFacetEdge & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




