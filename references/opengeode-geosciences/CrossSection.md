# class CrossSection

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/cross_section.h#50
```

 A Cross Section is a Section composed of Faults and Horizons (as Lines) and FaultBlocks and StratigraphicUnits (as Surfaces).



```cpp
Inherits from Section, Faults2D, Horizons2D, FaultBlocks2D, StratigraphicUnits2D
```



## Records

HorizonItemRange

FaultItemRange

FaultBlockItemRange

StratigraphicUnitItemRange



## Functions

### CrossSection

```cpp
public void CrossSection()
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/cross_section.h#144
```

### CrossSection

```cpp
public void CrossSection(CrossSection && )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/cross_section.h#145
```

### CrossSection

```cpp
public void CrossSection(Section && section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/cross_section.cpp#186
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/cross_section.h#148
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/cross_section.h#153
```

### horizon_items

```cpp
public HorizonItemRange horizon_items(const Horizon2D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/cross_section.cpp#60
```

### fault_items

```cpp
public FaultItemRange fault_items(const Fault2D & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/cross_section.cpp#97
```

### fault_block_items

```cpp
public FaultBlockItemRange fault_block_items(const FaultBlock2D & fault_block)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/cross_section.cpp#137
```

### stratigraphic_unit_items

```cpp
public StratigraphicUnitItemRange stratigraphic_unit_items(const StratigraphicUnit2D & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/cross_section.cpp#179
```



