# class BRepVolumicInserter


## Records

Impl



## Functions

### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(const BRepVolumicInserter & )
```


### operator=

```cpp
public BRepVolumicInserter & operator=(const BRepVolumicInserter & )
```


### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(BRep && brep)
```


### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(BRepVolumicInserter && inserter)
```


### ~BRepVolumicInserter

```cpp
public void ~BRepVolumicInserter()
```


### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(string_view scalar_function_name, absl::Span<const double> scalar_function_values)
```


### build

```cpp
public std::tuple<BRep, BRepMappings> build()
```


 Returns a new BRep with all the isovalues inserted as surfaces and the topology rebuilt. Also gives the "input to output" and "output to input" mappings between given and new BRep. Only the attributes marked as interpolable will be interpolated along the inserted surfaces.



