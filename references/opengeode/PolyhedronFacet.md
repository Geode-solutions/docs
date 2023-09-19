# struct PolyhedronFacet


 This struct represents a facet in a polyhedron



## Members

```cpp
public index_t polyhedron_id
```

```cpp
public local_index_t facet_id
```



## Functions

### PolyhedronFacet

```cpp
public void PolyhedronFacet()
```


### PolyhedronFacet

```cpp
public void PolyhedronFacet(index_t polyhedron_id_in, local_index_t facet_id_in)
```


### operator==

```cpp
public _Bool operator==(const PolyhedronFacet & other)
```


### operator!=

```cpp
public _Bool operator!=(const PolyhedronFacet & other)
```


### operator<

```cpp
public _Bool operator<(const PolyhedronFacet & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




