import {NgModule} from '@angular/core';
import {StaffCommonModule} from '@eg/staff/common.module';
import {HoldingsService} from './holdings.service';
import {MarkDamagedDialogComponent} from './mark-damaged-dialog.component';
import {MarkMissingDialogComponent} from './mark-missing-dialog.component';
import {MarkDiscardDialogComponent} from './mark-discard-dialog.component';
import {CopyAlertsDialogComponent} from './copy-alerts-dialog.component';
import {CopyTagsDialogComponent} from './copy-tags-dialog.component';
import {CopyNotesDialogComponent} from './copy-notes-dialog.component';
import {ReplaceBarcodeDialogComponent} from './replace-barcode-dialog.component';
import {DeleteHoldingDialogComponent} from './delete-volcopy-dialog.component';
import {ConjoinedItemsDialogComponent} from './conjoined-items-dialog.component';
import {TransferItemsComponent} from './transfer-items.component';
import {TransferHoldingsComponent} from './transfer-holdings.component';
import {BatchItemAttrComponent} from './batch-item-attr.component';

@NgModule({
    declarations: [
      MarkDamagedDialogComponent,
      MarkMissingDialogComponent,
      MarkDiscardDialogComponent,
      CopyAlertsDialogComponent,
      CopyTagsDialogComponent,
      CopyNotesDialogComponent,
      ReplaceBarcodeDialogComponent,
      DeleteHoldingDialogComponent,
      ConjoinedItemsDialogComponent,
      TransferItemsComponent,
      TransferHoldingsComponent,
      BatchItemAttrComponent
    ],
    imports: [
        StaffCommonModule
    ],
    exports: [
      MarkDamagedDialogComponent,
      MarkMissingDialogComponent,
      MarkDiscardDialogComponent,
      CopyAlertsDialogComponent,
      CopyTagsDialogComponent,
      CopyNotesDialogComponent,
      ReplaceBarcodeDialogComponent,
      DeleteHoldingDialogComponent,
      ConjoinedItemsDialogComponent,
      TransferItemsComponent,
      TransferHoldingsComponent,
      BatchItemAttrComponent
    ],
    providers: [
        HoldingsService
    ]
})

export class HoldingsModule {}

