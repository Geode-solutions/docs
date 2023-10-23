# class CrossSection

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

### CrossSection

```cpp
public void CrossSection(CrossSection && )
```

### CrossSection

```cpp
public void CrossSection(Section && section)
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

### native_extension

```cpp
public string_view native_extension()
```

### horizon_items

```cpp
public HorizonItemRange horizon_items(const Horizon2D & horizon)
```

### fault_items

```cpp
public FaultItemRange fault_items(const Fault2D & fault)
```

### fault_block_items

```cpp
public FaultBlockItemRange fault_block_items(const FaultBlock2D & fault_block)
```

### stratigraphic_unit_items

```cpp
public StratigraphicUnitItemRange stratigraphic_unit_items(const StratigraphicUnit2D & stratigraphic_unit)
```
