# class StratigraphicModelInserter


## Records

Impl



## Functions

### StratigraphicModelInserter

```cpp
public void StratigraphicModelInserter(const StratigraphicModel & model)
```


### ~StratigraphicModelInserter

```cpp
public void ~StratigraphicModelInserter()
```


### select_stratigraphic_surface_to_insert

```cpp
public void select_stratigraphic_surface_to_insert(const TriangulatedSurface3D & surface)
```


### insert_and_build

```cpp
public std::tuple<BRep, ModelMappings> insert_and_build()
```


 Returns the Merged BRep including, in the xyz space, the ImplicitModel surfaces and all the added surfaces, and gives the "input to output" and "output to input" mappings between Surfaces



