<?php

namespace Ceres\Widgets\Helper\Factories\Settings;

class ButtonSizeSettingFactory extends SelectSettingFactory
{
    public function __construct()
    {
        parent::__construct();

        $this->withName("Widget.widgetButtonSizeLabel")
            ->withTooltip("Widget.widgetButtonSizeTooltip")
            ->withDefaultValue("")
            ->withListBoxValues(
                ValueListFactory::make()
                    ->addEntry("btn-sm", "Widget.widgetButtonSizeSm")
                    ->addEntry("", "Widget.widgetButtonSizeNormal")
                    ->addEntry("btn-lg", "Widget.widgetButtonSizeLg")
                    ->toArray()
            );
    }

}
