# namespace detail



## Functions

### copy_faults

```cpp
BijectiveMapping copy_faults(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#39
```

### copy_faults

```cpp
void copy_faults(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#54
```

### copy_horizons

```cpp
BijectiveMapping copy_horizons(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#77
```

### copy_horizons

```cpp
void copy_horizons(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#92
```

### copy_fault_blocks

```cpp
BijectiveMapping copy_fault_blocks(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#115
```

### copy_fault_blocks

```cpp
void copy_fault_blocks(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#131
```

### copy_stratigraphic_units

```cpp
BijectiveMapping copy_stratigraphic_units(const ModelFrom & from, BuilderTo & builder_to)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#155
```

### copy_stratigraphic_units

```cpp
void copy_stratigraphic_units(const ModelFrom & from, BuilderTo & builder_to, Mapping & mapping)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#172
```

### copy_collection_item_relationships

```cpp
void copy_collection_item_relationships(const ModelFrom & from, const CollectionRangeFrom & collection_range_from, const Mapping & collection_mapping, const Mapping & item_mapping, BuilderTo & builder_to)
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/detail/copy.h#200
```

### rescale_implicit_value

```cpp
void rescale_implicit_value(ImplicitCrossSection & section, double scaling_factor)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#57
```

### rescale_implicit_value_to_bbox_scale

```cpp
void rescale_implicit_value_to_bbox_scale(StratigraphicSection & section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#73
```

### rescale_implicit_value

```cpp
void rescale_implicit_value(ImplicitStructuralModel & model, double scaling_factor)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#87
```

### rescale_implicit_value_to_bbox_scale

```cpp
void rescale_implicit_value_to_bbox_scale(StratigraphicModel & model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#103
```

### save_stratigraphic_surfaces

```cpp
void save_stratigraphic_surfaces(const StratigraphicSection & section, string_view prefix)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#115
```

### save_stratigraphic_blocks

```cpp
void save_stratigraphic_blocks(const StratigraphicModel & model, string_view prefix)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#146
```

### implicit_section_from_cross_section_scalar_field

```cpp
ImplicitCrossSection implicit_section_from_cross_section_scalar_field(CrossSection && section, string_view scalar_attribute_name)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#176
```

### implicit_model_from_structural_model_scalar_field

```cpp
ImplicitStructuralModel implicit_model_from_structural_model_scalar_field(StructuralModel && model, string_view scalar_attribute_name)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#203
```

### stratigraphic_model_from_implicit_model_and_coords

```cpp
StratigraphicModel stratigraphic_model_from_implicit_model_and_coords(ImplicitStructuralModel && implicit_model, local_index_t implicit_axis)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#231
```

### invalid_stratigraphic_tetrahedra

```cpp
std::vector<MeshElement> invalid_stratigraphic_tetrahedra(const StratigraphicModel & model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/detail/helpers.cpp#262
```



