# class StratigraphicSectionInserter

```cpp
Defined at ../include/geode/implicit/insertion/section_stratigraphic_inserter.h#23
```

## Records

Impl



## Functions

### StratigraphicSectionInserter

```cpp
public void StratigraphicSectionInserter(const StratigraphicSection & section)
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/section_stratigraphic_inserter.cpp#816
```

### ~StratigraphicSectionInserter

```cpp
public void ~StratigraphicSectionInserter()
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/section_stratigraphic_inserter.cpp#822
```

### select_stratigraphic_curve_to_insert

```cpp
public void select_stratigraphic_curve_to_insert(const EdgedCurve2D & curve)
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/section_stratigraphic_inserter.cpp#824
```

### insert_and_build

```cpp
public std::tuple<Section, ModelGenericMapping> insert_and_build()
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/section_stratigraphic_inserter.cpp#830
```

 Returns the Merged Section including all the added curves and gives the "input to output" and "output to input" mappings between Lines



