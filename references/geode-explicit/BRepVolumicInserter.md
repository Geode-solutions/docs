# class BRepVolumicInserter

```cpp
Defined at ../include/geode/explicit/brep/brep_volumic_inserter.h#23
```

## Records

Impl



## Functions

### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(const BRepVolumicInserter & )
```

```cpp
Defined at ../include/geode/explicit/brep/brep_volumic_inserter.h#25
```

### operator=

```cpp
public BRepVolumicInserter & operator=(const BRepVolumicInserter & )
```

```cpp
Defined at ../include/geode/explicit/brep/brep_volumic_inserter.h#25
```

### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(BRep && brep)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_volumic_inserter.cpp#331
```

### BRepVolumicInserter

```cpp
public void BRepVolumicInserter(BRepVolumicInserter && inserter)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_volumic_inserter.cpp#336
```

### ~BRepVolumicInserter

```cpp
public void ~BRepVolumicInserter()
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_volumic_inserter.cpp#341
```

### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(string_view scalar_function_name, absl::Span<const double> scalar_function_values)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_volumic_inserter.cpp#343
```

### build

```cpp
public std::tuple<BRep, BRepMappings> build()
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_volumic_inserter.cpp#351
```

 Returns a new BRep with all the isovalues inserted as surfaces and the topology rebuilt. Also gives the "input to output" and "output to input" mappings between given and new BRep. Only the attributes marked as interpolable will be interpolated along the inserted surfaces.



