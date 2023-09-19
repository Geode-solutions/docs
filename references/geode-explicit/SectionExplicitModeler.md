# class SectionExplicitModeler


## Records

Impl



## Functions

### SectionExplicitModeler

```cpp
public void SectionExplicitModeler(const SectionExplicitModeler & )
```


### operator=

```cpp
public SectionExplicitModeler & operator=(const SectionExplicitModeler & )
```


### SectionExplicitModeler

```cpp
public void SectionExplicitModeler(BoundingBox2D bbox)
```


### ~SectionExplicitModeler

```cpp
public void ~SectionExplicitModeler()
```


### select_curve_to_insert

```cpp
public void select_curve_to_insert(const EdgedCurve2D & mesh)
```


### insert_and_build

```cpp
public std::tuple<Section, ModelGenericMapping> insert_and_build()
```


 Returns the Merged Section including all the added curves and gives the "input to output" and "output to input" mappings between Lines



