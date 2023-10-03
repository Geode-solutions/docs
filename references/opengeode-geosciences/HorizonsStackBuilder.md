# class HorizonsStackBuilder

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#244
```

```cpp
Inherits from StratigraphicRelationshipsBuilder, HorizonsBuilder<3U>, StratigraphicUnitsBuilder<3U>, IdentifierBuilder
```



# class HorizonsStackBuilder

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#243
```

```cpp
Inherits from StratigraphicRelationshipsBuilder, HorizonsBuilder<2U>, StratigraphicUnitsBuilder<2U>, IdentifierBuilder
```



# class HorizonsStackBuilder

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/horizons_stack_builder.h#52
```

 Class managing modifications of a HorizonsStack**extends** **extends** **extends** 



```cpp
Inherits from StratigraphicRelationshipsBuilder, HorizonsBuilder<dimension>, StratigraphicUnitsBuilder<dimension>, IdentifierBuilder
```



## Records

InsertedHorizonInfo



## Functions

### HorizonsStackBuilder

```cpp
public void HorizonsStackBuilder<>(const HorizonsStackBuilder<> & )
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/horizons_stack_builder.h#57
```

### operator=

```cpp
public HorizonsStackBuilder<> & operator=(const HorizonsStackBuilder<> & )
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/horizons_stack_builder.h#57
```

### HorizonsStackBuilder

```cpp
public void HorizonsStackBuilder<>(HorizonsStack<dimension> & horizons_stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#34
```

### HorizonsStackBuilder

```cpp
public void HorizonsStackBuilder<>(HorizonsStackBuilder<dimension> && )
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/horizons_stack_builder.h#69
```

### copy

```cpp
public ModelMapping copy(const HorizonsStack<dimension> & horizons_stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#45
```

### copy_components

```cpp
public ModelMapping copy_components(const HorizonsStack<dimension> & horizons_stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#60
```

### copy

```cpp
public void copy(ModelCopyMapping & mapping, const HorizonsStack<dimension> & horizons_stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#73
```

 Copies the stack with the component uuids given by the mapping. Components for which the mapping does not exist are created with a new uuid and added to the mapping.

### copy_components

```cpp
public void copy_components(ModelCopyMapping & mapping, const HorizonsStack<dimension> & horizons_stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#87
```

 Copies the components with the uuid given by the mapping. If the mapping does not exist, creates a component with a new uuid and adds it to the mapping.

### add_horizon

```cpp
public const uuid & add_horizon()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#118
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#124
```

### add_stratigraphic_unit

```cpp
public const uuid & add_stratigraphic_unit()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#130
```

### add_stratigraphic_unit

```cpp
public void add_stratigraphic_unit(uuid stratigraphic_unit_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#136
```

### add_horizon_in_stratigraphic_unit

```cpp
public InsertedHorizonInfo add_horizon_in_stratigraphic_unit(const StratigraphicUnit<dimension> & strati_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#143
```

### add_horizon_above

```cpp
public void add_horizon_above(const Horizon<dimension> & horizon_above, const StratigraphicUnit<dimension> & strati_unit_under)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#207
```

### add_horizon_under

```cpp
public void add_horizon_under(const Horizon<dimension> & horizon_under, const StratigraphicUnit<dimension> & strati_unit_above)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#216
```

### add_erosion_above

```cpp
public void add_erosion_above(const Horizon<dimension> & erosion_horizon, const StratigraphicUnit<dimension> & eroded_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#225
```

### add_baselap_under

```cpp
public void add_baselap_under(const Horizon<dimension> & baselap_horizon, const StratigraphicUnit<dimension> & baselaping_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#234
```

### remove_horizon

```cpp
public void remove_horizon(const Horizon<dimension> & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#191
```

### remove_stratigraphic_unit

```cpp
public void remove_stratigraphic_unit(const StratigraphicUnit<dimension> & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/horizons_stack_builder.cpp#199
```



